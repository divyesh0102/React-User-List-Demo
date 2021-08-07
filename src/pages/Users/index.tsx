import React, { useEffect, useState } from 'react';
import { User } from '../../interfaces';
import fetchUsers from '../../services/Users';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap';

const UsersPage = (): JSX.Element => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    useEffect(() => {
        const fetchLocalUsers = async () => {
            const usersRespose = await fetchUsers();
            setUsers(usersRespose);
        }
        fetchLocalUsers();
    }, []);

    const filterUsers = (user:User) => {
        return ((user && user.name && user.name.includes(searchText)) || (user && user.email && user.email.includes(searchText)) || searchText.trim() === "");
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="4" sm="12" xs="12">
                    <Row className="my-4">
                        <h2>Users list</h2>
                    </Row>
                    <Row className="my-4">
                        <input name="searchText" className="rounded" type="text" placeholder="search by username or email..." onChange={(e)=>setSearchText(e.target.value)}/>
                    </Row>
                    <Row className="my-4">
                        <Accordion>
                            {users.length > 0 && users.map((user, index) =>
                                filterUsers(user) ? <Accordion.Item eventKey={`${index}`}>
                                    <Accordion.Header>{index + 1}. {user.name}  &nbsp;<a href="javascript:none;" style={{ 'textDecoration': 'none' }}>{`@${user.username}`}</a></Accordion.Header>
                                    <Accordion.Body style={{ 'textAlign': 'justify' }}>
                                        <p><span style={{ 'color': 'darkblue', 'fontWeight': 600 }}>EMAIL:</span> <a href={`mailto:${user.email}`}>{user.email}</a></p>
                                        <p><span style={{ 'color': 'darkblue', 'fontWeight': 600 }}>PHONE:</span> <a href={`tel:+${user.email}`}>{user.phone}</a></p>
                                        <p><span style={{ 'color': 'darkblue', 'fontWeight': 600 }}>WEBSITE:</span> {user.website}</p>
                                    </Accordion.Body>
                                </Accordion.Item> : null
                            )}
                        </Accordion>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default UsersPage;