package com.shopsphere.controller;

import com.shopsphere.model.Cart;
import com.shopsphere.service.CartService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")

@RequiredArgsConstructor

@CrossOrigin(origins = "http://localhost:5173")

public class CartController {

    private final CartService cartService;
 
    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(

            @RequestParam String userId,

            @RequestParam String productId,

            @RequestParam int quantity
    ) {

        return ResponseEntity.ok(
                cartService.addToCart(
                        userId,
                        productId,
                        quantity
                )
        );
    }

    // GET CART
    @GetMapping("/{userId}")
    public ResponseEntity<Cart> getCart(
            @PathVariable String userId
    ) {

        return ResponseEntity.ok(
                cartService.getCart(userId)
        );
    }
 
    @DeleteMapping("/remove")
    public ResponseEntity<Cart> removeFromCart(

            @RequestParam String userId,

            @RequestParam String productId
    ) {

        return ResponseEntity.ok(
                cartService.removeFromCart(
                        userId,
                        productId
                )
        );
    }
}