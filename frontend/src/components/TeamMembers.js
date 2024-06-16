import React from "react";
import { Typography, Box, Avatar, Grid } from "@mui/material";

const members = [
  { name: "John Doe", role: "Project Manager" },
  { name: "Jane Smith", role: "Developer" },
  { name: "Mike Johnson", role: "Designer" },
];

const TeamMembers = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        팀 구성원
      </Typography>
      <Grid container spacing={2}>
        {members.map((member, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ width: 56, height: 56, marginRight: 2 }}>
                {member.name.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.role}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamMembers;
