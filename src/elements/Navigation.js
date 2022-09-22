import React from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import { useDispatch } from 'react-redux';
import { updateLocation } from '../app/StoreSlice';

export const Navigation = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const accuURL = process.env.REACT_APP_API_URL
    const apikey = process.env.REACT_APP_API_KEY

    const promiseOptions = (term) =>
        new Promise(async (resolve) => {
            try {
                const response = await fetch(
                    `${accuURL}/locations/v1/cities/search?${new URLSearchParams({
                        apikey: apikey,
                        q: term,
                        details: true
                    })}`
                );

                let data = await response.json();

                let options = data.map(obj => {
                    console.log(obj);
                    return { label: `${obj.EnglishName}, ${obj?.Country?.ID}`, value: obj }
                })

                resolve(options)

            } catch (error) {
                resolve([])
            }

        });

    const handleChange = (e) => {
        dispatch(updateLocation(e.value))
    }

    return (
        <>
            <Navbar variant='dark' bg="dark">
                <Container>
                    <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>RC Test Forecast</Navbar.Brand>
                    <Navbar.Toggle />
                    <div className="d-flex" style={{ width: "300px" }}>
                        <AsyncSelect
                            className="w-100"
                            placeholder="search city"
                            loadOptions={promiseOptions}
                            onChange={handleChange}

                        />
                    </div>
                </Container>
            </Navbar>

        </>
    )
}