import React, { useState } from 'react';
import { Container, Title, Input, Button, Result, ErrorMessage } from './styled';

const App: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [className, setClassName] = useState<string>('');
    const [error, setError] = useState<string>('');

    // Função para lidar com a mudança na imagem
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setClassName('');
            setError('');
        }
    };

    // Função para enviar a imagem à API
    const sendImage = async () => {
        if (!image) {
            setError('Por favor, selecione uma imagem.');
            return;
        }

        const formData = new FormData();
        formData.append('file', image);

        try {
            const response = await fetch('https://resnet-api.onrender.com/predict/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setClassName(data.class_name);
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Erro desconhecido');
            }
        } catch (err) {
            setError('Erro ao conectar com a API');
        }
    };

    return (
        <Container>
            <Title>Classificador de Imagens</Title>
            <p>Carregue uma imagem para classificar!</p>
            <Input type="file" onChange={handleImageChange} accept="image/*" />
            <Button onClick={sendImage}>Classificar</Button>

            {className && <Result>Classe Predita: {className}</Result>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};

export default App;
