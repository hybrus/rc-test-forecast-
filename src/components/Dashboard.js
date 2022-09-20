import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getForecast, getIP, getLocByIP, storeSelector } from '../app/StoreSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { ip, location, forecast } = useSelector(storeSelector);

    useEffect(() => {
        dispatch(getIP());
    }, [dispatch]);

    useEffect(() => {
        if (!!ip)
            dispatch(getLocByIP({ ip: ip }));

    }, [ip, dispatch]);

    useEffect(() => {
        if (!!location)
            dispatch(getForecast({ location_key: location.Key }));

    }, [location, dispatch]);


    const maintainLeadingZero = (num) => {
        var s = num + "";
        while (s.length < 2) s = "0" + s;
        return s;
    }


    return (
        <Container className="mt-5">

            {!!location ?
                <>
                    <div className="mb-5">
                        <h1>
                            {location.EnglishName}, {location.Country.ID}
                        </h1>
                        <p className="text-muted">{dayjs().format('dddd MM/DD')}</p>
                    </div>
                    <h4 className='text-muted mb-2'>Weather Forecast (5 days)</h4>
                </>
                :
                <Spinner animation="border" />
            }

            <div className="d-flex flex-sm-row flex-column justify-content-center gap-4">
                {forecast.map(obj => {
                    return <Card key={obj.Date} className="border-0 w-100">
                        <Card.Body>
                            <div className="mb-3">
                                <div className='bg-light px-3 py-3 rounded-top border'>
                                    <span className='d-block mb-2 fw-semibold'>Day</span>
                                    <div className="mb-2">
                                        <img className="w-100 mx-auto" src={`https://developer.accuweather.com/sites/default/files/${maintainLeadingZero(obj.Day.Icon)}-s.png`} alt='icon' height="45" style={{ objectFit: "contain" }} />
                                    </div>
                                    <small>
                                        {obj.Day.IconPhrase}
                                    </small>
                                </div>
                                <div className='bg-dark text-white px-3 py-3 rounded-bottom' >
                                    <span className='d-block mb-2 fw-semibold'>Night</span>
                                    <div className="mb-2">
                                        <img className="w-100 mx-auto" src={`https://developer.accuweather.com/sites/default/files/${maintainLeadingZero(obj.Night.Icon)}-s.png`} alt='icon' height="45" style={{ objectFit: "contain" }} />
                                    </div>
                                    <small>
                                        {obj.Night.IconPhrase}
                                    </small>
                                </div>
                            </div>
                            <Card.Subtitle className="text-muted text-center">{dayjs(obj.Date).format('dddd MM/DD')}</Card.Subtitle>
                            <Card.Text className='text-center'>
                                <small className="text-muted">{obj.Temperature.Minimum.Value}&#176;{obj.Temperature.Minimum.Unit} / {obj.Temperature.Maximum.Value}&#176;{obj.Temperature.Maximum.Unit}</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}
            </div>
        </Container>
    );
};

export default Dashboard;
