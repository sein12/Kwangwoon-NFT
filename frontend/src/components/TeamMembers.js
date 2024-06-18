import React from "react";
import { Typography, Box, Avatar, Grid } from "@mui/material";

const members = [
  { name: "최민섭", role: "Team Leader" },
  { name: "이주석", role: "Front-end Developer" },
  { name: "송승화", role: "Front-end Developer" },
  { name: "최세인", role: "Back-end Developer" },
  { name: "정우현", role: "Product Manager" },
  { name: "방정현", role: "Product Manager" },
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
