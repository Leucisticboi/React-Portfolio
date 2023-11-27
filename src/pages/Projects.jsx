import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';

export default function Projects() {
  return (
    <ImageList sx={{ width: '100%', my: 2, padding: 2 }}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
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
            subtitle={item.languages}
            actionIcon={
              <IconButton
                component="a"
                href={item.link}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.54)',
                  '&:hover': {
                    color: '#fefae0',
                  },
                }}
                aria-label={`info about ${item.title}`}
              >
                <LinkIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/Tech_Blog.png',
    title: 'Tech Blog',
    languages: 'JavaScript, Handlebars, CSS, MySQL, Sequelize, Express, Node.js',
    link: 'https://milos-tech-blog-8d2ab6a0e819.herokuapp.com/',
    featured: true,
  },
  {
    img: '/Note_Taker.png',
    title: 'Note Taker',
    languages: 'JavaScript, Handlebars, CSS, Express, Node.js',
    link: 'https://blooming-fortress-38068-298d76c80f65.herokuapp.com/notes',
  },
  {
    img: '/Doodle_Duel.png',
    title: 'Tech Blog',
    languages: 'JavaScript, Handlebars, CSS, SCSS',
    link: 'https://doodle-duel-p2-32e9f10a2b67.herokuapp.com/login',
  },
  {
    img: '/Social_API.png',
    title: 'Social Media API',
    languages: 'JavaScript, Node.js, Express, MongoDB, Mongoose, Insomnia',
    link: 'https://drive.google.com/file/d/1BZ303hBUg0yYeSPuCiRjtribBJOze6A4/view',
    featured: true,
  },
];