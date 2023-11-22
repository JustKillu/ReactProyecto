import React, { useEffect, useState } from "react";
import './creditos.css';

import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row"


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
    //Repositorios
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
    
    <div className="center-text">
    <h1 style={{ padding: "3rem" }} class="text-center" >Quienes somos</h1>
    <Container >
     
    <div className="row" class="Containercards">

     
      <Card className='customCard' style={{ width: "17rem" }}>
        <Card.Img src={avatarURL} />
        <Card.Body>
          <Card.Title>{githubUsername}</Card.Title>

          <Button className='customButton' variant="primary" onClick={() => { window.location.href = url1; } }>
              Mis Repositorios
          </Button>
        </Card.Body>
      </Card>
      
   
    <Card className='customCard' style={{ width: "17rem" }}>
      <Card.Img src={avURL} />
      <Card.Body>
        <Card.Title>{gitUsername}</Card.Title>

        <Button className='customButton' variant="primary" onClick={() => { window.location.href = url2; } }>
            Mis Repositorios
        </Button>
      </Card.Body>
    </Card>
    

    <Card className='customCard' style={{ width: "17rem" }}>
      <Card.Img src={avarURL} />
      <Card.Body>
        <Card.Title>{githUsername}</Card.Title>

        <Button className='customButton' variant="primary" onClick={() => { window.location.href = url3; } }>
            Mis Repositorios
        </Button>
      </Card.Body>
    </Card>
    
   
  </div>
  </Container>
  </div>
  );

  
}

export default App;
