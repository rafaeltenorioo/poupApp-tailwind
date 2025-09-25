import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { IconCurrency } from "../icons";
import { Earnings } from "./Earnings";
import { Expenses } from "./Expenses";

export const FinancialMovement = () => {
  return (
    <>
      <ul>
        <Expenses name="Ifood" value="20" date="01/10/2024" showBorder={true} />
        <Expenses
          name="Papelaria Mila"
          value="80"
          date="02/10/2024"
          showBorder={true}
        />
        <Earnings
          name="Freela (2ª parte)"
          value="1000"
          date="03/10/2024"
          showBorder={true}
        />
        <Expenses
          name="Magazine Luiza"
          value="300"
          date="04/10/2024"
          showBorder={false}
        />
      </ul>
      <div className="flex justify-center">
        <Dialog>
          <Button>
            <IconCurrency />
            Adicionar transação
          </Button>
        </Dialog>
      </div>
    </>
  );
};
