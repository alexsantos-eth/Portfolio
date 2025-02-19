import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const projects = [
  {
    title: "E-learning Platform",
    description: "An interactive platform for learning software development",
    link: "https://www.youtube.com/embed/rlbyWuLwpVs",
    type: "youtube",
  },
  {
    title: "Technical Articles",
    description: "In-depth articles on software development topics",
    link: "https://alexsantos-eth.medium.com/",
    image: "/assets/medium.png",
    type: "medium",
  },
  {
    title: "Scalable React Native Apps Guide",
    description:
      "A comprehensive guide for building scalable React Native applications",
    link: "https://walnut-mochi-e6c.notion.site/Manifiesto-para-la-construcci-n-de-aplicaciones-altamente-escalables-con-React-Native-9d2cccdd84284a739124def0fffb55ae",
    image: "/assets/notion.png",
    type: "notion",
  },
];

export default function ProjectShowcase() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center">
        Featured Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 12px)",
                md: "calc(33.333% - 16px)",
              },
              display: "flex",
              flexDirection: "column",
            }}
          >
            {project.type === "youtube" ? (
              <CardMedia
                component="iframe"
                height="200"
                src={project.link}
                title={project.title}
                sx={{ border: 0 }}
              />
            ) : (
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                title={project.title}
              />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h3">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  {project.title}
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
