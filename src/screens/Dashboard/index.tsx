import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    User,
    Photo,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from "./styles";

export function Dashboard() {
    const data = [{
        title: "Dev de site",
        amount: "R$ 12.000,00",
        date: "13/04/2020",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        }
    },
    {
        title: "Dev de site",
        amount: "R$ 12.000,00",
        date: "13/04/2020",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        }
    },
    {
        title: "Dev de site",
        amount: "R$ 12.000,00",
        date: "13/04/2020",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        }
    }]
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/869359?v=4' }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Filipe</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="última entrada dia 13 de abril"
                />
                <HighlightCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="última saída dia 03 de abril"
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de abril"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />} 
                    showsVerticalScrollIndicator={false}
                    />
            </Transactions>
        </Container>
    )
}