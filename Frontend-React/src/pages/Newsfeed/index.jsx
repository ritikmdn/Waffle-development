import React, { useState, useEffect } from 'react';
import "./Newsfeed.css"
import LandingPageNavbar from "components/LandingPageNavbar";
import { List, Text, Img, Button, Line } from "components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useCookies } from 'react-cookie';
import { WhatsappShareButton } from 'react-share';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const NewsfeedPage = () => {

  const [articles, setArticles] = useState([]);
  const [cookies, setCookie] = useCookies(['voted']);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  const shareUrl = 'https://www.waffle.ink';
  
  useEffect(() => {
    fetch(`http://localhost:8000/api/articles/?page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
        setArticles(data.results);
        setHasNextPage(data.has_next);
        setHasPreviousPage(data.has_previous);
    });
    console.log(currentPage,hasNextPage,hasPreviousPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (hasNextPage) {
        setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (hasPreviousPage) {
        setCurrentPage(currentPage - 1);
    }
  };

  const handleVote = (pollOptionId, pollId) => {
    if (cookies.voted && cookies.voted.includes(pollId)) {
      alert('You have already voted for this poll.');
      return;
    }
  
    fetch('http://localhost:8000/api/vote/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ poll_option_id: pollOptionId }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.votes) {
          setCookie('voted', [...(cookies.voted || []), pollId], { path: '/' });
          // Fetch the updated poll data
          fetch('http://localhost:8000/api/polls/') // Adjust the URL as per your API
            .then(response => response.json())
            .then(data => {
              // Update the articles state with the updated poll data
              setArticles(prevArticles => {
                const updatedArticles = prevArticles.map(article => {
                  const updatedPolls = article.polls.map(poll => {
                    if (poll.id === pollId) {
                      // Replace the poll with the updated data
                      return data.find(updatedPoll => updatedPoll.id === pollId);
                    }
                    return poll;
                  });
                  return { ...article, polls: updatedPolls };
                });
                return updatedArticles;
              });
            });
        }
      });
  };
  
  return (
    <>
      <div className="newsfeed-page-container">
        <LandingPageNavbar
          waffle="Waffle."
          product="Product"
          readnews="Read News"
          joinWaitlist="Join waitlist"
        />
        <List
          className="list"
          orientation="vertical"
        >
          {articles.map(article => (
          <div className="news-box" key={article.id}>
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Text className="category-text">
                    #{article.category}
                  </Text>
                  <WhatsappShareButton url={shareUrl} title={`*${article.headline}*\n\n${article.content}\n\nRead more on:`}>
                    <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                  </WhatsappShareButton>
              </div>
              <div className="content-box">
                <Img
                  src={article.image_url}
                  className="article-image"
                  alt="rectangle"
                />
                <div className="article-text">
                  <Text
                    className="article-text-headline"
                  >
                    {article.headline}
                  </Text>
                  <Text
                    className="article-text-content"
                  >
                    <>
                    {article.content}
                    </>
                  </Text>
                </div>
              </div>
              {article.polls.map(poll => (
              <div className="opinion-poll-box">
                <div key='{poll.id}' className="opinion-poll-question">
                  <Text
                    className="font-bold text-gray_401 text-left tracking-[-0.30px] w-auto"
                    variant="body4"
                  >
                    OPINION POLL
                  </Text>
                  <Text>
                    {poll.question}
                  </Text>
                </div>
                  {/* <div className="poll-options-box">
                    {poll.options.map(option => (
                      <Button className="options" key={option.id} onClick={() => handleVote(option.id, poll.id)}>
                        {option.option} ({option.percent_votes.toFixed(0)}%)
                      </Button>
                    ))}
                  </div> */}
                <div className="poll-options-box">
                  {poll.options.map(option => (
                    cookies.voted && cookies.voted.includes(poll.id) ? (
                      <Button className="options-inactive" key={option.id}>
                        {option.option} ({option.percent_votes.toFixed(0)}%)
                      </Button>
                    ) : (
                      <Button className="options" key={option.id} onClick={() => handleVote(option.id, poll.id)}>
                        {option.option}
                      </Button>
                    )
                  ))} 
                </div>
              </div>
            ))}
          </div>
          ))}
          <div>
              <button onClick={handlePreviousPage} disabled={!hasPreviousPage} style={{fontFamily: 'Helvetica', color: '#766D6D', marginRight: '5vmin',}}>
                <FontAwesomeIcon icon={faChevronLeft} /> Previous 
              </button>
              <button onClick={handleNextPage} disabled={!hasNextPage} style={{fontFamily: 'Helvetica', color: '#766D6D', marginLeft: '5vmin',}}>
                Next <FontAwesomeIcon icon={faChevronRight} />
              </button>
          </div>
        </List>
        <div className="page-bottom-down">
          <Line className="bg-gray_105 h-0.5 mt-[10vmin] w-full" />
          {/* <div className="flex flex-row md:gap-10 items-center justify-between mt-[15px] w-full"> */}
          <div className="footer-bottom">
            {/* <div className="flex flex-row items-end justify-between w-[17%]"> */}
            <div className="footer-socials">
              <Text
                className="footer-socials-text"
              >
                Follow us on
              </Text>
              <a href="https://www.instagram.com/newsinpoint/" target="_blank">
                <Img
                  src="images/img_instagramglyphwhite.png"
                  className="h-[25px] md:h-auto object-cover w-[25px]"
                  alt="instagramglyphw"
                />
              </a>
              <a href="http://chat.whatsapp.com/Hqitid1Gr958cCfOJNzhCD" target="_blank">
                <Img
                  src="images/img_digitalglyphwhite.png"
                  className="h-[25px] md:h-auto object-cover w-[25px]"
                  alt="digitalglyphwhi"
                />
              </a>
            </div>
            <Text
              className="text-left text-white_A700 w-auto"
              variant="body2"
            ></Text>
          </div>
          <Text
            className="mt-4 text-left text-white_A700 w-auto"
            variant="body4"
          >
            Coming soon on
          </Text>
          <Img
            src="images/img_googleplay.png"
            className="googleplay"
            alt="googleplay"
          />
        </div>
      </div>
    </>
  );
};

export default NewsfeedPage;