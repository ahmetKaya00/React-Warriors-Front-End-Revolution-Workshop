import React, { useContext, useState } from 'react'
import AuthContext from '../authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import alertify from 'alertifyjs';
import { Container } from 'reactstrap';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {setIsLoggedIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = () =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const user = response.data.find(u => u.username === username);

            if(user && password === "123456"){
                setIsLoggedIn(true);
                alertify.success("Giriş Başarılı!");
                navigate("/products");
            }else{
                alertify.error("Kullanıcı adı veya parola hatalıdır!");
            }
        })
        .catch(err => {
            alertify.error("API hatası maydana geldi!");
            console.error("API Hatası: ",err);
        })
    };
  return (
    <Container className='d-flex justify-content-center align-items-center' style={{minHeight: '100vh'}}>
        
    </Container>
  )
}

export default Login;