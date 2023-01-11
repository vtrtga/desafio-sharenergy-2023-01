/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import '../styles/row.css';
import React, { useState, useEffect } from 'react';
import ButtonDelete from './ButtonDelete';
import ButtonEdit from './ButtonEdit';
import { putMethod } from '../services/usersAndCustomers';

function Row({ data }) {
  const [onEdit, setOnEdit] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [name, setName] = useState(data.name);
  const [birthDate, setBirthDate] = useState(data.birthDate);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [address, setAddress] = useState(data.address);
  const [cpf, setCpf] = useState(data.cpf);
  // const [updated, setUpdated] = useState(false);
  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleOnSave = async () => {
    try {
      const reloadTime = 2000;
      await putMethod(`/customer/${customerId}`, {
        birthDate,
        name,
        phone,
        email,
        cpf,
        address,
      });
      setTimeout(() => window.location.reload(), reloadTime);
      setOnEdit(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
     setCustomerId(data.id);
    }, []);
  return (
    <tr className="md: border-solid border-black border-2" key={ data.i }>
      {/* coluna Name */}
      {
        onEdit
        ? (
          <td>
        <input onChange={ ({ target: { value } }) => setName(value) } value={ name } className="w-44" />
          </td>
        )
        : (
          <td>{ data.name }</td>
        )
      }
      {/* coluna Birth Date */}
      {
        onEdit
        ? (
          <td>
            <input onChange={ ({ target: { value } }) => setBirthDate(value) } className="w-24" value={ birthDate } />
          </td>
        )
        : (
          <td>{ data.birthDate }</td>
        )
      }
      {/* coluna Email */}
      {
        onEdit
        ? (
          <td>
            <input onChange={ ({ target: { value } }) => setEmail(value) } className="w-48" value={ email } />
          </td>
        )
        : (
          <td>{ data.email }</td>
        )
      }
      {/* coluna Phone */}
      {
        onEdit
        ? (
          <td>
            <input onChange={ ({ target: { value } }) => setPhone(value) } className="w-28" value={ phone } />
          </td>
        )
        : (
          <td>{ data.phone }</td>
        )
      }
      {/* coluna Address */}
      {
        onEdit
        ? (
          <td>
            <input onChange={ ({ target: { value } }) => setAddress(value) } value={ address } />
          </td>
        )
        : (
          <td>{ data.address }</td>
        )
      }
      {/* coluna CPF */}
      {
        onEdit
        ? (
          <td>
            <input onChange={ ({ target: { value } }) => setCpf(value) } className="w-36" value={ cpf } />
          </td>
        )
        : (
          <td>{ data.cpf }</td>
        )
      }
      <td>
        <ButtonEdit
          onEdit={ onEdit }
          onClickEdit={ handleOnEdit }
          onClickSave={ handleOnSave }
        />

      </td>
      <td><ButtonDelete deleteId={ data.id } /></td>
    </tr>
  );
}

export default Row;
