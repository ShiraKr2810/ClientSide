import React, { FC, useState, useEffect } from 'react';
import './Members.css';
import axios from 'axios';
import { Member } from '../../Type/Member.type';
import { Button, Spinner } from 'react-bootstrap';

const Members = () => {
    const [memberList, setMemberList] = useState<Member[]>([])
    const [showSpinner, setShowspinner] = useState(false)
    const getMemberList = () => {
        setShowspinner(true)
        let a = axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then((response) => {
            let a = memberList.concat(response.data);
            setMemberList([...a]);
            setShowspinner(false)
            console.log("get members completed")
        })
    }

    useEffect(() => {
        getMemberList()
      }, []);

    return (
        <div className="Member">
            {showSpinner ? <Spinner animation="border" variant="primary" /> : ''}
            <table>
              <tr>
                <th>id</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>birth_date</th>
                <th>address</th>
                <th>telephone</th>
                <th>phone</th>
              </tr>
              {
                memberList.map((member,index) => {
                  return (<tr><td>{member.id}</td><td>{member.first_name}</td><td>{member.last_name}</td><td>{member.birth_date.toLocaleDateString()}</td>
                  <td>{member.telephone}</td><td>{member.phone}</td></tr>)
                })
              }
            </table>
    </div>
    );
}
export default Members;