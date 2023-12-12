import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { FaGithub } from "react-icons/fa";

const itemData = [
  {
    img: '/Tech_Blog.png',
    title: 'Tech Blog',
    skills: 'JavaScript, Handlebars, CSS, MySQL, Sequelize, Express, Node.js',
    link: 'https://milos-tech-blog-8d2ab6a0e819.herokuapp.com/',
    gitHub: 'https://github.com/Leucisticboi/tech-blog'
  },
  {
    img: '/Note_Taker.png',
    title: 'Note Taker',
    skills: 'JavaScript, Handlebars, CSS, Express, Node.js',
    link: 'https://blooming-fortress-38068-298d76c80f65.herokuapp.com/notes',
    gitHub: 'https://github.com/Leucisticboi/NoteTaker'
  },
  {
    img: '/Doodle_Duel.png',
    title: 'Doodle Duel',
    skills: 'JavaScript, Handlebars, CSS, SCSS',
    link: 'https://doodle-duel-p2-32e9f10a2b67.herokuapp.com/login',
    gitHub: 'https://github.com/Leucisticboi/DoodleDuel'
  },
  {
    img: '/Social_API.png',
    title: 'Social Media API',
    skills: 'JavaScript, Node.js, Express, MongoDB, Mongoose, Insomnia',
    link: 'https://github.com/Leucisticboi/Social-Media-API',
    gitHub: 'https://github.com/Leucisticboi/Social-Media-API'
  },
  {
    img: '/E_Commerce.png',
    title: 'E-Commerce Backend',
    skills: 'JavaScript, Node.js, Dotenv, Express, MySQL, Sequelize, Insomnia',
    link: 'https://github.com/Leucisticboi/E-Commerce-Back-End',
    gitHub: 'https://github.com/Leucisticboi/E-Commerce-Back-End'
  },
  {
    img: 'Work_Scheduler.png',
    title: 'Work Day Scheduler',
    skills: 'JavaScript, Bootstrap, CSS',
    link: 'https://leucisticboi.github.io/WorkScheduler/',
    gitHub: 'https://github.com/Leucisticboi/WorkScheduler'
  }
];

export default function Projects() {
  return (
    <ImageList sx={{ width: '100%', paddingTop: '90px', paddingBottom: '90px' }}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{ margin: '10px', borderRadius: '15px' }}
          elevation={0}
        >
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            component="a"
            href={item.link}
            title={item.title}
            subtitle={item.skills}
            actionIcon={
              <>
                <IconButton
                  component="a"
                  href={item.link}
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.54)',
                    background: 'transparent',
                    '&:hover': {
                      color: '#fefae0',
                    },
                  }}
                  aria-label={`info about ${item.title}`}
                >
                  <OpenInNewIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={item.gitHub}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.54)',
                    background: 'transparent',
                    '&:hover': {
                      color: '#fefae0',
                    },
                  }}
                >
                  <FaGithub />
                </IconButton>
              </>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
