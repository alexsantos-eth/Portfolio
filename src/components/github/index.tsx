"use client";

import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}

export default function GitHubContributions() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/alexsantos-eth/repos?sort=stars&per_page=6"
    )
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching GitHub repos:", error));
  }, []);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center">
        GitHub Contributions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {repos.map((repo) => (
          <Card
            key={repo.id}
            sx={{
              width: { xs: "100%", sm: "calc(50% - 12px)" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h3">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  {repo.name}
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {repo.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
