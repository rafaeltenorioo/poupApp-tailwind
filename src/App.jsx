import { Aside } from "./componentes/Aside";
import Card, { CardBody, CardHeader } from "./componentes/Card";
import { Container } from "./componentes/Container";
import { Main } from "./componentes/Container/Main";
import { DailyBudget } from "./componentes/DailyBudget";
import { Dialog } from "./componentes/Dialog";
import { FinancialMovement } from "./componentes/FinancialMovement";
import { MyAccounts } from "./componentes/MyAccounts";
import { SavingStatus } from "./componentes/SavingStatus";
import { SearchInput } from "./componentes/SearchInput";
import { Typography } from "./componentes/Typography";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput />
          <div>
            <Typography variant="h1">Olá Rafael!</Typography>
            <Typography variant="body">
              Veja como estão suas finanças
            </Typography>
          </div>
          <section className="grid grid-cols-2 items-stretch gap-6">
            <Card>
              <CardHeader>Orçamento diário disponível</CardHeader>
              <CardBody>
                <DailyBudget value={50} />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Progresso da meta financeira</CardHeader>
              <CardBody>
                <SavingStatus />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Movimentação financeira</CardHeader>
              <CardBody>
                <FinancialMovement />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Minhas contas</CardHeader>
              <CardBody>
                <MyAccounts />
              </CardBody>
            </Card>
          </section>
        </Main>
        <Dialog />
      </Container>
    </div>
  );
}

export default App;
