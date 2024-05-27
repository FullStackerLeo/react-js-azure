import { useState, useEffect, useRef } from 'react';
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

    const handleSend = () => {
        if (inputValue.trim() !== '') {
            const newMessage = {
                text: inputValue,
                timestamp: new Date().toLocaleTimeString(),
                sender: 'user', // Only user messages
            };
            setMessages([...messages, newMessage]);
            setInputValue('');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <List ref={listRef} sx={{ flexGrow: 1, overflowY: 'auto', padding: 2 }}>
                {messages.map((message, index) => (
                    <ListItem key={index} sx={{ justifyContent: 'flex-start' }}>
                        <ListItemText
                            primary={message.text}
                            secondary={message.timestamp}
                            sx={{
                                backgroundColor: '#F7F7FF',
                                borderRadius: 2,
                                padding: 1,
                                marginBottom: 0,
                                marginTop: 0,
                                maxWidth: '100%',
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
                    backgroundColor: 'white', // Ensure the background color matches the design
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
