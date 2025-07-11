import react from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.Contact.map((contact) => {
        return (
            <ContactCard contact={contact}></ContactCard>
        );
    });

    return (
        <div className="ui celled list">{renderContactList}</div>
    );
}

export default ContactList;