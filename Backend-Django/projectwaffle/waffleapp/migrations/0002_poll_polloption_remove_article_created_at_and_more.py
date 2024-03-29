# Generated by Django 4.2.1 on 2023-05-10 08:42

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('waffleapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Poll',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('question', models.CharField(default='Poll question', max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='PollOption',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('option', models.CharField(default='Option for the poll', max_length=200)),
                ('poll', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='waffleapp.poll')),
            ],
        ),
        migrations.RemoveField(
            model_name='article',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='article',
            name='title',
        ),
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.CharField(default='Miscellaneous', max_length=25),
        ),
        migrations.AddField(
            model_name='article',
            name='headline',
            field=models.CharField(default='Headline', max_length=200),
        ),
        migrations.AddField(
            model_name='article',
            name='image_url',
            field=models.CharField(default='Image URL', max_length=300),
        ),
        migrations.AlterField(
            model_name='article',
            name='content',
            field=models.CharField(default='Lorem Ipsum', max_length=2000),
        ),
        migrations.AlterField(
            model_name='article',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.CreateModel(
            name='PollResult',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('user_id', models.UUIDField()),
                ('poll_option', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='waffleapp.polloption')),
            ],
        ),
        migrations.AddField(
            model_name='poll',
            name='article',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='waffleapp.article'),
        ),
    ]
