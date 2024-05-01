import { useWallet } from '@solana/wallet-adapter-react';
import { ExplorerLink } from '../cluster/cluster-ui';
import { WalletButton } from '../solana/solana-provider';
import { AppHero, ellipsify } from '../ui/ui-layout';
import { useSolanaAttendanceDepositDappProgram } from './solana-attendance-deposit-dapp-data-access';
import {
  SolanaAttendanceDepositDappCreate,
  SolanaAttendanceDepositDappProgram,
} from './solana-attendance-deposit-dapp-ui';

export default function SolanaAttendanceDepositDappFeature() {
  const { publicKey } = useWallet();
  const { programId } = useSolanaAttendanceDepositDappProgram();

  return publicKey ? (
    <div>
      <AppHero
        title="Solana Attendance Deposit Dapp"
        subtitle={
          'Initialize the course app by clicking the button below.'
        }
      >
        <p className="mb-6">
          <ExplorerLink
            path={`account/${programId}`}
            label={ellipsify(programId.toString())}
          />
        </p>
        <SolanaAttendanceDepositDappCreate />
      </AppHero>
      <SolanaAttendanceDepositDappProgram />
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero py-[64px]">
        <div className="hero-content text-center">
          <WalletButton className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
}
