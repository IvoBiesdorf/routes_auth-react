import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Field } from '../../components/Field';
import './style.css';
import ReactToPrint from 'react-to-print';

export const User = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();
    const [user, setUser] = useState()
    const ref = useRef(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'+id) ///Post {`Para: ${id}`} {`QS: ${qs.get('segunda')}`}
        .then(response => response.json())
        .then(user => {
            setUser(user)
        })
    },[]);

    const componentRef = useRef();
    const ComponentToPrint = React.forwardRef((props, ref) => {
        return (
            <div ref={ref} className='user-content'>
                <h1 className='user-name'>{user?.name}</h1>
                <Field bg={true} width="50%" field_name="Username">{user?.username}</Field>
                <Field bg={true} width="50%" field_name="E-Mail">{user?.email}</Field>
                <Field bg={false} width="50%" field_name="Street">{user?.address.street}</Field>
                <Field bg={false} width="50%" field_name="Suite">{user?.address.suite}</Field>
                <Field bg={true} width="50%" field_name="City">{user?.address.city}</Field>
                <Field bg={true} width="50%" field_name="Zip code">{user?.address.zipcode}</Field>
                <Field bg={false} width="50%" field_name="Geo Lat.">{user?.address.geo.lat}</Field>
                <Field bg={false} width="50%" field_name="Geo lng.">{user?.address.geo.lng}</Field>
                <Field bg={true} width="50%" field_name="Phone">{user?.phone}</Field>
                <Field bg={true} width="50%" field_name="Website">{user?.website}</Field>
                <Field bg={false} width="50%" field_name="Company name">{user?.company.name}</Field>
                <Field bg={false} width="50%" field_name="Company bs">{user?.company.bs}</Field>
                <Field bg={true} width="100%" field_name="Company catchPhrase">{user?.company.catchPhrase}</Field>
               
            </div>
        );
    });
    return (
        <>
            <div className='body-print'>
            <Link to="/users">
                <button className='btnVoltar'><i className="fa fa-chevron-circle-left" aria-hidden="true"></i> Voltar</button>
            </Link>
                <ReactToPrint
                    trigger={() =>  <button className='btnImprimir'><i className="fa fa-print" aria-hidden="true"></i> Imprimir</button>}
                    content={() => componentRef.current}
                    documentTitle="docIb"
                    />
                <ComponentToPrint ref={componentRef} />
            </div>
        </>
    );
};
