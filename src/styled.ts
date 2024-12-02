// src/styled.ts

import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    padding: 20px;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #EAF4FF;
`;

export const Title = styled.h1`
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    padding: 10px;
    margin: 20px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;

    &:hover {
        border-color: #007bff;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Result = styled.h3`
    color: #28a745;
    margin-top: 20px;
    font-size: 1.5rem;
`;

export const ErrorMessage = styled.h3`
    color: #dc3545;
    margin-top: 20px;
    font-size: 1.5rem;
`;
