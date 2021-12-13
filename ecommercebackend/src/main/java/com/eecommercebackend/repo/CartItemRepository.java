package com.eecommercebackend.repo;

import com.eecommercebackend.model.cart.CartItem;
import com.eecommercebackend.model.cart.CartItemPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CartItemRepository extends JpaRepository <CartItem, CartItemPK> {
}
