import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const [boycottItems, setBoycottItems] = useState(["Coca Cola", "Fanta", "Boga"]);
  const [newBoycottItem, setNewBoycottItem] = useState("");

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddBoycottItem = () => {
    if (newBoycottItem.trim() !== "") {
      setBoycottItems([...boycottItems, newBoycottItem]);
      setNewBoycottItem(""); // Clear input after adding
    }
  };

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Boycott List
      </Typography>
      <Box sx={{ mb: "1.5rem" }}>
        {boycottItems.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}
      </Box>
      <Box
        component="form"
        display="flex"
        flexDirection="row"
        gap="1rem"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddBoycottItem();
        }}
      >
        <TextField
          label="Add Boycott Item"
          variant="outlined"
          size="small"
          value={newBoycottItem}
          onChange={(e) => setNewBoycottItem(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddBoycottItem}>Add</Button>
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
