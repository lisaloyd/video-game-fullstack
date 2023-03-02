import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
// import './VideoGameTable.css';

const VideoGameTable = ({ videoGames }) => {
  const videoGameRows = videoGames.map((videoGame) => (
    <tr>
      <td>{videoGame.name}</td>
      <td>{videoGame.year}</td>
      <td>{videoGame.platform}</td>
      <td>{videoGame.genre}</td>
      <td>{videoGame.publisher}</td>
    </tr>
  ));

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Platform</th>
          <th>Genre</th>
          <th>Publisher</th>
        </tr>
      </thead>
      <tbody>
        {videoGameRows}
      </tbody>
    </Table>
  );
};

export default VideoGameTable;
