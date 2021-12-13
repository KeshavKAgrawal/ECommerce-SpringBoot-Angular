package com.eecommercebackend.exceptions;

public class CartItemAlreadyExistsException extends RuntimeException {
    public CartItemAlreadyExistsException(String message) {
        super(message);
    }
}

