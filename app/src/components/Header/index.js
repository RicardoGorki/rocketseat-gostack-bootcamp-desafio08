import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, BasketContainer, ItemCount } from './styles';
import NavigationServices from '../../services/navigation';

function Header({ cartSize }) {
  return (
    <Container>
      <Logo />
      <BasketContainer onPress={() => NavigationServices.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize || 0}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
