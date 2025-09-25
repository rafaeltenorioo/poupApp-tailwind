import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { IconWallet } from "../icons";
import { MyAccountsBank } from "./MyAccountsBank";

export const MyAccounts = () => {
  return (
    <div className="min-h-full flex flex-col justify-between">
      <ul>
        <MyAccountsBank bank="Anybank" value="1200" showBorder={true} />
        <MyAccountsBank bank="Bytebank" value="800" showBorder={true} />
        <MyAccountsBank bank="Switch Bank" value="1800" showBorder={false} />
      </ul>
      <div className="flex justify-center">
        <Dialog>
          <Button>
            <IconWallet />
            Adicionar conta
          </Button>
        </Dialog>
      </div>
    </div>
  );
};
