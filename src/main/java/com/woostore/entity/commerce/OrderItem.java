package com.woostore.entity.commerce;

import lombok.*;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;

    @OneToOne
    @NonNull
    Product product;

    @NonNull
    int quantity;
}
