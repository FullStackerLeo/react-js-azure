import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const listRef = useRef(null);

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        setMessages(savedMessages);
    }, []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [messages]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSend = async () => {
        if (inputValue.trim() !== '') {
            const userMessage = inputValue;
            const newMessage = {
                text: userMessage,
                timestamp: new Date().toLocaleTimeString(),
                sender: 'user', // Only user messages
            };
            setMessages([...messages, newMessage]);
            setInputValue('');

            try {
                const response = await sendMessageToAI(userMessage);
                const aiMessage = response.data.choices[0].text.trim();
                const aiResponse = {
                    text: aiMessage,
                    timestamp: new Date().toLocaleTimeString(),
                    sender: 'AI',
                };
                setMessages([...messages, aiResponse]);
            } catch (error) {
                console.error('Error communicating with OpenAI API:', error);
            }
        }
    };

    const sendMessageToAI = async (message) => {
        const response = await fetch('/api/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        return response.json();
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <List ref={listRef} sx={{ flexGrow: 1, overflowY: 'auto', padding: 2 }}>
                {messages.map((message, index) => (
                    <ListItem key={index} sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                        <ListItemText
                            primary={message.text}
                            secondary={message.timestamp}
                            sx={{
                                backgroundColor: message.sender === 'user' ? '#F7F7FF' : '#E0E0E0',
                                borderRadius: 2,
                                padding: 1,
                                marginBottom: 1,
                                marginTop: 1,
                                maxWidth: '80%',
                                alignSelf: 'flex-end',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 2,
                    borderTop: '1px solid #ccc',
                    position: 'sticky',
                    bottom: 0,
                    backgroundColor: 'white',
                }}
            >
                <TextField
                    variant="outlined"
                    fullWidth
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    sx={{ marginRight: 1, flex: 1 }}
                />
                <Button variant="contained" color="primary" onClick={handleSend}>
                    Send
                </Button>
            </Box>
        </Box>
    );
}

export default ChatBot;
