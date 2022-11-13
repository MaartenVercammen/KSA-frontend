import React, { FormEventHandler, ForwardedRef, lazy } from 'react';
import { Roles, User } from '../../types';

type Props = {
  buttonLabel: string,
  onSubmit: FormEventHandler<HTMLFormElement>,
  user?: User
};

const Input = lazy(() => import('../form/input'));
const Select = lazy(() => import('../form/select'));

const UserForm = React.forwardRef(
  ({ buttonLabel, onSubmit, user }: Props, form: ForwardedRef<HTMLFormElement>) => (
    <form onSubmit={onSubmit} ref={form}>
      {user !== undefined && <input type="hidden" name="id" value={user.id} /> }
      <Input label="voornaam" name="firstName" required defaultValue={user?.firstName} />
      <Input label="naam" name="lastName" required defaultValue={user?.lastName} />
      <Input label="e-mail" name="email" required defaultValue={user?.email} />
      <Select
        name="role"
        label="Gebruikersrol"
        defaultValue={user?.role || Roles.BRAGGEL}
      >
        <option value={Roles.ADMIN}>Admin</option>
        <option value={Roles.BONDS}>Bonds</option>
        <option value={Roles.BRAGGEL}>BraggelTeam</option>
      </Select>
      <Input
        label="wachtwoord"
        type="password"
        name="password"
        min={8}
        messages={{
          patternMismatch: 'Wachtwoord moet minstens 8 karakters bevatten, waarvan 1 hoofdletter & 1 cijfer',
        }}
        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
        required={user === undefined}
      />
      <button type="submit">{buttonLabel}</button>
    </form>
  ),
);

UserForm.defaultProps = {
  user: undefined,
};

export default UserForm;
