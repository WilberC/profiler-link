import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Box,
} from "@material-ui/core";
import {
  Business as BusinessIcon,
  Refresh as RefreshIcon
} from "@material-ui/icons";

function DataSection({ title, subTitle, date, companyIcon }) {
  return (
    <CardContent>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar variant="rounded">
              { companyIcon || <BusinessIcon/> }
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={ title }
            secondaryTypographyProps={ {
              component: "div"
            } }
            secondary={
              <>
                <Typography variant="body1">{ subTitle }</Typography>
                <Typography variant="body1">{ date }</Typography>
              </>
            }/>
        </ListItem>
      </List>
    </CardContent>
  )
}

export function Profile({ profileData }) {
  const { name, experiences, education: educations } = profileData

  return (
    <>
      <Card>
        <CardContent style={ { height: 130, background: "linear-gradient(180deg, #0A66C2 50%, transparent 50%)" } }>
          <Box display="flex" justifyContent="flex-start">
            <Box bgcolor="background" borderRadius="50%"
                 style={ { width: "5rem", height: "5rem", marginTop: 28, marginBottom: 12 } }/>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">{ name }</Typography>
            <RefreshIcon style={ { color: "#0A66C2" } }/>
          </Box>
        </CardContent>
      </Card>
      <Card>
        { experiences.map((experience, id) => (
          <DataSection
            key={ id }
            title={ experience.jobTitle }
            subTitle={ experience.company }
            date={ experience.date_range }/>
        )) }
      </Card>
      <br/>
      <Card>
        { educations.map((education, id) => (
          <DataSection
            key={ id }
            title={ education.career }
            subTitle={ education.institution }
            date={ education.date }/>
        )) }
      </Card>
    </>
  )
}