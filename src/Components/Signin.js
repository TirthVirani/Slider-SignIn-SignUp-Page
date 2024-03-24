import React, { Component} from 'react';
// import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from "styled-components";
import { useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDewvsTyJWKo1IIkMGpq27Wom5LlwG38uM",
  authDomain: "signin-signup-page-5722b.firebaseapp.com",
  databaseURL: "https://signin-signup-page-5722b-default-rtdb.firebaseio.com",
  projectId: "signin-signup-page-5722b",
  storageBucket: "signin-signup-page-5722b.appspot.com",
  messagingSenderId: "861309290287",
  appId: "1:861309290287:web:88afbab1abbbe03c6403da",
  measurementId: "G-KBR6WL7NYZ"
};

if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}

const move = keyframes`
0%{
    opacity:0;
}
95%{
    opacity:1;
}
`;

const BackgroundBox = styled.div`
    background-color: #121c2b;
    height: 67vh;
    width: 62%;
    box-shadow: 0px 0px 8px #fff;

    display: flex;
    justyfy-content: center;
    align-items: center;

    margin: 6.5rem auto;

    position: relative;
    border-radius: ${(props)=>
        props.clicked?"230px 23px 23px 230px":"23px 230px 230px 23px"};

    .text1{
        z-index:${(props)=>(props.clicked?"-700":"700")};
        transform:${(props)=>(props.clicked?"translateX(0)":"translateX(80%)")};
        transition: transform 1s ease-in-out;
        animation: ${(props)=>(props.clicked? move:"none")} 1.5s;
    }
    .text2{
        z-index:${(props)=>(props.clicked?"700":"-700")};
        transform:${(props)=>(props.clicked?"translateX(-75%)":"translateX(0)")};
        transition: transform 1s ease-in-out;
        animation: ${(props)=>(props.clicked? "none":move)} 1.5s;
    }

    .signin{
        position: absolute;
        top: 0%;
        text-align: center;
        z-index:${(props)=>(props.clicked?"-600":"500")};
        transform:${(props)=>(props.clicked?"none":"translateX(-39%)")};
        transition: all 1s;
    }
    .signup{
        position: absolute;
        top: 0%;
        text-align: center;
        z-index:${(props)=>(props.clicked?"500":"-500")};
        transform:${(props)=>(props.clicked?"translateX(56%)":"translateX(-10%)")};
        transition: all 1s;

        @media screen and (max-width:406px){
          transform:${(props)=>(props.clicked?"translateX(46%)":"none")};
        }
    }
`;

const Box1 = styled.div`
    background-color: #121c2b;
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    transform: ${(props) =>
        props.clicked ? "translateX(90%)" : "translateX(9%)"};

    transition: transform 1s;

    &::after,
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #121c2b;

        z-index: -200;
    }
    
    &::before {
        top: 3rem;
        border-radius:23px;
        border:2px solid #fff;
    }
    
    &::after {
        top: -2rem;
        border-radius: 23px 23px 0 0 ;
        border-top:2px solid #fff;
        border-right:2px solid #fff;
        border-left:2px solid #fff;
    }
`;

const Box2 = styled.div`
    background-color: #121c2b;
    width: 45.05%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    

    z-index: 600;
    transform: ${(props) =>
        props.clicked ? "translateX(-122%)" : "translateX(0%)"};
    transition: transform 1s;
    border-radius: ${(props)=>
        props.clicked?"230px 0 0 230px":"0 230px 230px 0"};
`;

const Form = styled.form`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 5rem;
    position: absolute;
    left: 25%;
`;

const Input = styled.input`
    background-color: #121c2b;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;

    padding: 1rem 2rem; 
    margin: 0.5rem 0;
    width: 100%;

    &:focus{
        outline: none;
        border: none;
        border: 2px solid #fff;
    }
`;

const Button = styled.button`
    border-radius: 3px;
    padding: 1rem 3.5rem;
    margin-top: 1rem;
    border: 0px solid black;
    background-color: black;
    color: #fff;
    text-trasform: uppercase;
    cursor: pointer; 
    letter-spacing: 1px;

    box-shadow: 0 4px #999;

    &:hover{
        background-color: #1b1b1b;
    }
    &:active{
        background-color: black;
        box-shadow: 0 5px #666;
        trasform: traslateY(4px);
    }
    &:focus{
        outline: none;
    }
`;

const Title = styled.h1`
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 700;
`;

const Link = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 1.0rem;
    margin: 1rem 0;
`;

const ButtonAnimate = styled.button`
    position: absolute;
    z-index: 1000;
    height: 5rem;
    width: 5rem;
    top: 70%;
    border: none;
    cursor: pointer;

    right: ${(props)=>(props.clicked ? "51%" : "41.5%")};

    transform:${(props)=>(props.clicked ? "rotate(360deg)" : "rotate(0)")};
    transition:all 1.5s;
    background-color:  transparent;

    &::before{
        content:"🔄";
        font-size: 4rem;
    }
    &:focus{
        outline: none;
    }
`;

const ShowPass = styled.span`
    position: absolute;
    right: ${(props)=>(props.clicked ? "-60px" : "90px")};
    top: ${(props)=>(props.clicked ? "0px" : "228px")};
    cursor: pointer;
    font-size: 1.5rem;

    @media screen and (max-width:769px){
      top: ${(props)=>(props.clicked ? "0px" : "400px")};
    }
    @media screen and (max-width:430px){
      top: ${(props)=>(props.clicked ? "0px" : "249px")};
    }
`;

const ShowPass2 = styled.span`
    position: absolute;
    right: ${(props)=>(props.clicked ? "-60px" : "90px")};
    top: 265px;
    cursor: pointer;
    font-size: 1.5rem;

    @media screen and (max-width:769px){
      top: 435px;
    }
    @media screen and (max-width:430px){
      top: 285px;
    }
`;

const ShowPass3 = styled.span`
    position: absolute;
    right: ${(props)=>(props.clicked ? "-60px" : "90px")};
    top: 193px;
    cursor: pointer;
    font-size: 1.5rem;

    @media screen and (max-width:769px){
      top: 366px;
    }
    @media screen and (max-width:430px){
      top: 213px;
    }
`;

const Text = styled.div`
    z-index: 1000;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    letter-spacing: 0.2rem;
    color: #fff;
    position: absolute;
    left: 33%;

    .attention{
        font-size: 2.5rem;
        position: relative;
        margin-top: 0rem;
    }
    .attention-icon{
        position: absolute;
        right:${(props)=>(props.clicked?"5.5%":"none")};
        top: 100%;
        font-size: 5rem;
    }
`;

const Div = styled.div`
    @media screen and (max-width:769px){
      height: auto;
      width: 1530px;
    }
    
    @media screen and (max-width:406px){
      height: auto;
      width: 1530px;
    }
`;

const Signin = (props) => {
    // const navigate = useNavigate();
    
    const handleSignIn = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // const registeredEmail = "tirthvirani77225@gmail.com"; // Replace with registered email
        // const registeredPassword = "tirthvirani77225";
        // if (email === registeredEmail && password === registeredPassword) {
        //     alert("Sign-in successful");
        //     e.target.reset();
        //     navigate('/home');
        // } else {
        //     alert("Invalid credentials. Please try again.");
        // }
        props.login(e);
    };

    const [click, setClick] = useState(false);
    const[showpassword,setShowPassword]=useState(false);
    const handleClick = () => setClick(!click);
    // eslint-disable-next-line no-unused-vars
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    }) 

    const handleOnChange =(e) =>{
        setFormData((prevData) =>({
            ...prevData,[e.target.name]:e.target.value
        }))
    }

    return (
        <Div>
        <BackgroundBox clicked={click}> 
                <ButtonAnimate clicked={click} onClick={handleClick}></ButtonAnimate>
                <Form className='signin' onSubmit={handleSignIn}>
                    <Title>Sign In</Title>
                    <Input type='email' name='email' id='emailId' placeholder='Email address' autoComplete='off' required/>
                    <Input type={showpassword ?"text" :"password"} name="password" onChange={handleOnChange} id='passwordId' placeholder='Password' autoComplete='off' required/>
                    <ShowPass onClick={() =>setShowPassword((prev) =>!prev)}>
                        {showpassword ?(
                            <AiOutlineEyeInvisible fontSize={15} />
                        ):(<AiOutlineEye fontSize={15}/>)}
                    </ShowPass>
                    <Link href="#">Forgot Your Password?</Link>
                    <Button type='submit'>Sign In</Button>
                    {/* onClick={handleSignIn} */}
                </Form>

                <Form className='signup'  onSubmit={props.register}>
                    <Title>Sign Up</Title>
                    <Input type='email' name='email' placeholder='Email address' autoComplete='off' required/>
                    <Input type={showpassword ?"text" :"password"} name='password' onChange={handleOnChange} placeholder='Create Password' autoComplete='off' required/>
                    <Input type={showpassword ?"text" :"password"} name='confirmPassword' onChange={handleOnChange} placeholder='Repeat Password' autoComplete='off' required/>
                    <ShowPass2 onClick={() =>setShowPassword((prev) =>!prev)}>
                        {showpassword ?(
                            <AiOutlineEyeInvisible fontSize={15} />
                        ):(<AiOutlineEye fontSize={15}/>)}
                    </ShowPass2>
                    <ShowPass3 onClick={() =>setShowPassword((prev) =>!prev)}>
                        {showpassword ?(
                            <AiOutlineEyeInvisible fontSize={15} />
                        ):(<AiOutlineEye fontSize={15}/>)}
                    </ShowPass3>
                    <Link href="#" onClick={handleClick}>Already have an Account?</Link>
                    <Button>Sign Up</Button>
                </Form>

                <Text className='text1' clicked={click}>
                    <h1>Welcome!</h1>
                    Don't have an account?
                    <br/>
                    <span className="attention">Click Here</span>
                    <span className="attention-icon">
                    ⤶
                    </span>
                </Text>

                <Text className='text2' clicked={click}>
                    <h1>Hi There!</h1>
                    Already have an account?
                    <br/>
                    <span className="attention">Click Here</span>
                    <span className="attention-icon">
                    ⤷
                    </span>
                </Text>
                <Box1 clicked={click}/>
                <Box2 clicked={click}/>
            </BackgroundBox>
        </Div>
    );
};

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          //page = 0 (login), 1 = reguister
            page:1,
            message:"",
          // 1 - success , 0 - error
            type : 1,
        }
    }

    registrationHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        this.setState({ email, password, confirmPassword }, () => console.log(this.state));
        if(password !== confirmPassword){
            alert("Password does not match...")
            return;
        }
        const auth = firebase.auth();
        const authPromise = auth.createUserWithEmailAndPassword(email, password);
        authPromise.then((data) => {
            auth.currentUser.sendEmailVerification();
            this.setState(alert("Registed Successfully"),() => {
                event.target.email.value = "";
                event.target.password.value = "";
                event.target.confirmPassword.value = "";
          });
        }).catch((error) => {
            alert(error.message)
        });
    };
    
    loginHandler = (event) => {
        event.preventDefault();
        const auth = firebase.auth();
        const email = event.target.email.value;
        const password = event.target.password.value;
        auth
            .signInWithEmailAndPassword(email, password)
            .then((data) =>{
                if (data.user.emailVerified === true){
                    alert("Login Successfully");
                }else
                    alert("Your email is not verified yet...");
            }).catch((error) =>{
                alert(error.message);
            });
    };
    render() {
        return (
        <Signin type={this.state.type}
            message={this.state.message} 
            register={this.registrationHandler}
            login={this.loginHandler}
            history={this.props.history}></Signin>
        )
    }
}
export default App;
