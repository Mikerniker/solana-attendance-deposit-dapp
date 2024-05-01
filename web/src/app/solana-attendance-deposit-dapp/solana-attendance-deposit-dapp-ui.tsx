import { Keypair } from '@solana/web3.js';
import { useSolanaAttendanceDepositDappProgram } from './solana-attendance-deposit-dapp-data-access';

export function SolanaAttendanceDepositDappCreate() {
  const { initialize } = useSolanaAttendanceDepositDappProgram();

  return (
    <div>
      <button
        className="btn btn-xs lg:btn-md btn-primary"
        onClick={() => initialize.mutateAsync(Keypair.generate())}
        disabled={initialize.isPending}
      >
        Manage Course{initialize.isPending && '...'}
      </button>
    </div>
  );
}

export function SolanaAttendanceDepositDappProgram() {
  const { getProgramAccount } = useSolanaAttendanceDepositDappProgram();

  if (getProgramAccount.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (!getProgramAccount.data?.value) {
    return (
      <div className="alert alert-info flex justify-center">
        <span>
          Program account not found. Make sure you have deployed the program and
          are on the correct cluster.
        </span>
      </div>
    );
  }
  return (
    <div className={'space-y-6'}>
      <pre>{JSON.stringify(getProgramAccount.data.value, null, 2)}</pre>
    </div>
  );
}
