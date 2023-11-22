import React, { useEffect, useState } from "react";
import './creditos.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';

let url1 = 'https://github.com/JustKillu?tab=repositories'
let url2 = 'https://github.com/Fervolts?tab=repositories'
let url3 = 'https://github.com/Carmenuvm?tab=repositories'

function App() {
  var [avatarURL, setAvatarURL] = useState();
  var [githubUsername, setGitHubUsername] = useState();
  var [repoData, setRepoData] = useState();
  var [avURL, setAvURL] = useState();
  var [gitUsername, setGitUsername] = useState();
  var [repData, setRepData, reppData, setReppData] = useState();
  var [avarURL, setAvarURL] = useState();
  var [githUsername, setGithUsername] = useState();


  async function repDataURL() {
    //Datos del usuario
    await fetch("https://api.github.com/users/Fervolts/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank" href={item.svn_url}>
                {item.name}
              </a>
            </div>
          ));
          setRepData(list);
        },
      );
  }

  async function repoDataURL() {
    //Datos del usuario
    await fetch("https://api.github.com/users/JustKillu/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank" href={item.svn_url}>
                {item.name}
              </a>
            </div>
          ));
          setRepoData(list);
        },
      );
  }

  async function reppDataURL() {
    //Datos del usuario
    await fetch("https://api.github.com/users/Carmenuvm/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank" href={item.svn_url}>
                {item.name}
              </a>
            </div>
          ));
          setReppData(list);
        },
      );
  }

  useEffect(() => {
    fetch("https://api.github.com/users/Fervolts")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvURL(result.avatar_url);
          setGitUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/JustKillu")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/Carmenuvm")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvarURL(result.avatar_url);
          setGithUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div  className="App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column center" className = "my-auto">
      <h1 style={{ padding: "1rem" }} class="center">Quienes somos</h1>
      <Stack direction="horizontal" gap={2}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={avatarURL} />
        <Card.Body>
          <Card.Title>{githubUsername}</Card.Title>

          <Button variant="primary" onClick={() => { window.location.href = url1; } }>
              Mis Repositorios
          </Button>
        </Card.Body>
      </Card>
      {repoData}
   
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={avURL} />
      <Card.Body>
        <Card.Title>{gitUsername}</Card.Title>

        <Button variant="primary" onClick={() => { window.location.href = url2; } }>
            Mis Repositorios
        </Button>
      </Card.Body>
    </Card>
    {repData}

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={avarURL} />
      <Card.Body>
        <Card.Title>{githUsername}</Card.Title>

        <Button variant="primary" onClick={() => { window.location.href = url3; } }>
            Mis Repositorios
        </Button>
      </Card.Body>
    </Card>
    {reppData}
    </Stack>
  </div>
  );

  
}

export default App;
