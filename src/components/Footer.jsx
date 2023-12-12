import {
  AppBar,
  Toolbar,
  IconButton,
  Container
} from '@mui/material';
import ToolTip from '@mui/material/Tooltip';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

const settings = [
  {
    title: "React",
    url: "https://reactjs.org/",
    icon: <FaReact />
  },
  {
    title: "Node.js",
    url: "https://nodejs.org/en/",
    icon: <FaNodeJs />
  },
  {
    title: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    icon: <FaHtml5 />
  },
  {
    title: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: <FaCss3Alt />
  },
  {
    title: "Bootstrap",
    url: "https://getbootstrap.com/",
    icon: <FaBootstrap />
  },
  {
    title: "MySQL",
    url: "https://www.mysql.com/",
    icon: <GrMysql />
  },
  {
    title: "MongoDB",
    url: "https://www.mongodb.com/",
    icon: <SiMongodb />
  },
  {
    title: "GitHub Profile",
    url: "https://github.com/Leucisticboi",
    icon: <FaGithub />
  },
  {
    title: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/robert-henderson-74b88415b/",
    icon: <FaLinkedin />
  }
]

export default function Footer() {
  return (
    <AppBar position="fixed" sx={{
      maxHeight: 'auto',
      alignSelf: 'center',
      top: 'auto',
      bottom: 10,
      borderRadius: '15px',
      width: { xs: '98%', sm: '90%', md: '90%', lg: '60%', xl: '40%' },
    }}
    >
      <Container maxWidth="xl" sx={{ margin: 'auto' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-evenly' }}>

          {settings.map((setting) => (
            <ToolTip key={setting.title} title={setting.title} arrow>
              <IconButton
                component="a"
                href={setting.url}
              >
                {setting.icon}
              </IconButton>
            </ToolTip>
          ))}

        </Toolbar>
      </Container>
    </AppBar>
  )
}
