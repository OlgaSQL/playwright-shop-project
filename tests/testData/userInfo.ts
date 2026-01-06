import { faker } from "@faker-js/faker";

export interface UserInfo {
  alias: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  addressComplement: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  email?: string;
}

export const OLGA: UserInfo = {
  alias: "Olga Zagurska",
  firstName: "Olga",
  lastName: "Zagurska",
  company: "Cat Ltd",
  address: "123 Cat Street",
  addressComplement: "123 Cat Street",
  city: "Cat City",
  state: "Alabama",
  postalCode: "90001",
  country: "United States",
  phone: "+1234567890",
  email: "olga.zagurska@gmail.com",
};

export const fakeUser = {
  alias: faker.person.firstName() + " " + faker.person.lastName(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  company: faker.company.name(),
  address: faker.location.streetAddress(),
  addressComplement: faker.location.secondaryAddress(),
  city: faker.location.city(),
  state: "Alabama",
  postalCode: "90001",
  country: "United States",
  phone: faker.phone.number("+1##########"),
  password: "Test@1234",
};
