import React from "react";

import {
    Amount,
    Category,
    CategoryName,
    Container,
    Footer,
    Icon,
    Title,
    Date
} from "./styles";

interface Category {
    name: string;
    icon: string;
}

interface Data {
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface Props {
    data: Data
}

export function TransactionCard({data}: Props) {
    return (
        <Container>
            <Title>{data.title}</Title>

            <Amount>{data.amount}</Amount>

            <Footer>
                <Category>
                    <Icon name={data.category.icon}></Icon>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>

        </Container>
    )
}