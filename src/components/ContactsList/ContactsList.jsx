import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem/ContactsItem';

const ContactsList = ({contacts, onDeleteContact}) => {
  return (
    <>
      <ul>
        {contacts.map(({id, name, number}) => (
          <ContactsItem
            key={id}
            contact={{ id, name, number }}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;