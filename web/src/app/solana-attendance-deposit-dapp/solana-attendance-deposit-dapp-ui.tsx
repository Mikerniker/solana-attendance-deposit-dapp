import { Keypair } from '@solana/web3.js';
import {
  useSolanaAttendanceDepositDappProgram,
  useSolanaAttendanceDepositDappProgramCourseAccount,
} from './solana-attendance-deposit-dapp-data-access';

export function SolanaAttendanceDepositDappCreate() {
  const { initialize, accounts } = useSolanaAttendanceDepositDappProgram();

  return (
    <div>
      <button
        className="btn btn-xs lg:btn-md btn-primary"
        onClick={() => initialize.mutateAsync(Keypair.generate())}
        disabled={initialize.isPending || accounts.data?.length === 1}
      >
        Become a course manager{initialize.isPending && '...'}
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

export function SolanaAttendanceDepositDappCourseManage() {
  const { accounts } = useSolanaAttendanceDepositDappProgram();
  const { createCourse } = useSolanaAttendanceDepositDappProgramCourseAccount();

  return (
    <div className="mt-6 p-6 border-2 border-white">
      <h2>Course Manager</h2>
      {accounts.isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        accounts.data?.[0] && (
          <div className="flex justify-between">
            <div>
              <div>Account: {accounts.data[0].pubkey.toBase58()}</div>
              <button
                className="btn btn-xs lg:btn-md btn-primary"
                onClick={() =>
                  createCourse.mutateAsync({
                    name: 'Course 101',
                    deposit: 100,
                    lock_until: 10,
                    num_of_lessons: 10,
                  })
                }
              >
                Create a course{createCourse.isPending && '...'}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
