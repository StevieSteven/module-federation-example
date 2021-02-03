import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

export interface User {
  readonly id: string;
  readonly firstName: string;
  readonly surname: string;
  readonly email: string;
}

export class DummyDataGenerator {
  private firstNames = [
    "Alex",
    "Bernd",
    "Carlos",
    "Daniel",
    "Erik",
    "Frank",
    "Gerald",
    "Hartmut",
    "Ingrid",
    "Jasmin",
    "Klaus",
    "Linda",
  ];
  private surnames = ["Schneider", "Müller", "Schulz", "Richter"];

  public generateUsers(numberOfUsers: number): User[] {
    return _.times(
      numberOfUsers,
      (): User => {
        const firstNameIndex = _.random(0, this.firstNames.length - 1);
        const surnameIndex = _.random(0, this.surnames.length - 1);

        const firstName = this.firstNames[firstNameIndex];
        const surname = this.surnames[surnameIndex];
        return {
          id: uuidv4(),
          firstName: firstName,
          surname: surname,
          email: `${firstName.toLowerCase()}.${surname.toLowerCase()}@local.de`,
        };
      }
    );
  }
}
