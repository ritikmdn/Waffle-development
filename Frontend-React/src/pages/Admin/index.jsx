import React, { useState } from "react";
import "./admin.css"

const FormPage = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password === "#Password2.0") {
      setAuthenticated(true);
    } else {
      alert("Incorrect password, please try again!");
    }
  };

  return (
    <div className="form-container">
      {!authenticated ? (
        <form onSubmit={handleFormSubmit} className="form-section">
          <h1 style={{ textAlign: 'center', marginBottom: '2vh' }}> Authentication</h1>
          <div className="form-input">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" style={{ border: '1px solid black', marginBottom: '2vh',color: 'black', fontSize:'20px', padding:'10px'}}>Submit</button>
        </form>
      ) : (
        <>
      <div className="form-section">
        <h1 style={{ textAlign: 'center', marginBottom: '2vh' }}>News Article</h1>
        <form>
          <div className="form-input">
            <label htmlFor="category">Category:</label>
            <select name="category" id="category">
              <option value="finance">Finance</option>
              <option value="business">Business</option>
              <option value="tech">Tech</option>
              <option value="sports">Sports</option>
              <option value="science">Science</option>
              <option value="politics">Politics</option>
              <option value="entertainment">Entertainment</option>
              <option value="travel">Travel</option>
              <option value="international">International</option>
              <option value="health_fitness">Health & Fitness</option>
              <option value="miscellaneous">Miscellaneous</option>
            </select>
          </div>
          <div className="form-input">
            <label htmlFor="headline">Headline:</label>
            <input type="text" name="headline" id="headline" maxLength="200" />
          </div>
          <div className="form-input">
            <label htmlFor="article_content">Article content:</label>
            <textarea name="article_content" id="article_content" maxLength="2000"></textarea>
          </div>
          <div className="form-input">
            <label htmlFor="image_url">Image URL:</label>
            <input type="url" name="image_url" id="image_url" />
          </div>
        </form>
      </div>

      <div className="form-section">
        <h1 style={{ textAlign: 'center', marginBottom: '2vh' }}>Opinion Poll</h1>
        <form>
          <div className="form-input">
            <label htmlFor="question">Question:</label>
            <input type="text" name="question" id="question" maxLength="200" />
          </div>
          <div className="form-input">
            <label htmlFor="option1">Option 1:</label>
            <input type="text" name="option1" id="option1" />

            <label htmlFor="option2">Option 2:</label>
            <input type="text" name="option2" id="option2" />


            <label htmlFor="option3">Option 3:</label>
            <input type="text" name="option3" id="option3" />

            <label htmlFor="option4">Option 4:</label>
            <input type="text" name="option4" id="option4" />

            <label htmlFor="option5">Option 5:</label>
            <input type="text" name="option5" id="option5" />
          </div>
        </form>
      </div>
      </>
      )}
    </div>
  );
};

export default FormPage;
