import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';

const itemData = [
  {
    title: 'Resume Page 1',
    img: './resume1.png'
  },
  {
    title: 'Resume Page 2',
    img: './resume2.png'
  }
]

export default function Resume() {
  return (
    <Container sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '90px', paddingBottom: '90px' }}>
      <ImageList sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ width: '100%', padding: '10px'}}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}