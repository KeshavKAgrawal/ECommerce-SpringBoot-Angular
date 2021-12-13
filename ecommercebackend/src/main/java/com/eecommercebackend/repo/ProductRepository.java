package com.eecommercebackend.repo;

import com.eecommercebackend.model.Product;
import com.eecommercebackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    void deleteById(Long id);
    Optional<Product> findById (Long id);
}
