import React from 'react';
import { Query } from 'react-apollo';
import { NAME_CASE } from '../api/query';

export default function PrintStatmentParticipant(props) {
    const genderParty = (gender) =>{
      return gender === "2" ? ' яка зареєстрована ': ' який зареєстрований ';
    };
    const p = props.participant;

    return(
        <Query query={ NAME_CASE } variables={{name: p.name}}>
            {({ data, loading, error }) => {
                if (loading) return <p>loading</p>;
                if (error) return <p>ERROR</p>;
                console.log(data.nameGender);
                return (
                    <span>
                        <b> {data.nameCase[4]}</b>,
                        реєстраційний номер облікової картки платника податків <b>{p.registrationNumber}</b>,
                        {genderParty(data.nameGender)}
                        за адресою: <b>{p.address}</b>
                    </span>
                )
            }}
        </Query>
    );
}