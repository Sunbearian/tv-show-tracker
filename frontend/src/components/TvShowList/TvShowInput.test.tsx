import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import TvShowInput from "./TvShowInput";

//what do i want to test?
//test that the input renders
//test that the inputs are correctly filled

const addTvShow = jest.fn();
describe("Testing that component renders correctly", () => {
	test("TV Show input renders", () => {
		render(<TvShowInput addTvShow={addTvShow}></TvShowInput>);
		const tvShowName: HTMLInputElement = screen.getByPlaceholderText("TV Show");

		userEvent.type(tvShowName, "Test Show");
		expect(tvShowName.value).toBe("Test Show");
	});
});

test("Series watched input renders and captures input correctly", () => {
	render(<TvShowInput addTvShow={addTvShow}></TvShowInput>);
	const tvShowName: HTMLInputElement =
		screen.getByPlaceholderText("Series Watched");

	userEvent.type(tvShowName, "1");
	expect(tvShowName.value).toBe("1");
});

test("Series watched input is not a Number", () => {
	render(<TvShowInput addTvShow={addTvShow}></TvShowInput>);
	const tvShowName: HTMLInputElement =
		screen.getByPlaceholderText("Series Watched");

	userEvent.type(tvShowName, "1");
	expect(tvShowName.value).not.toBe(1);
});

test("Total series input renders and captures input correctly", () => {
	render(<TvShowInput addTvShow={addTvShow}></TvShowInput>);
	const tvShowName: HTMLInputElement =
		screen.getByPlaceholderText("Total Series");

	userEvent.type(tvShowName, "1");
	expect(tvShowName.value).toBe("1");
});

test("Total series input is not a Number", () => {
	render(<TvShowInput addTvShow={addTvShow}></TvShowInput>);
	const tvShowName: HTMLInputElement =
		screen.getByPlaceholderText("Series Watched");

	userEvent.type(tvShowName, "1");
	expect(tvShowName.value).not.toBe(1);
});

test("Last watched input renders and captures input correctly", () => {
	render(<TvShowInput addTvShow={addTvShow}></TvShowInput>);
	const tvShowName: HTMLInputElement =
		screen.getByPlaceholderText("Last watched");
	fireEvent.change(tvShowName, { target: { value: "2020-12-24" } });

	expect(tvShowName.value).toBe("2020-12-24");
	expect(tvShowName.value).not.toBe("2020-24-12");
});

test("Rating input renders and captures input correctly", () => {
	render(<TvShowInput addTvShow={addTvShow}></TvShowInput>);
	const rating: HTMLOptionElement[] = screen.getAllByRole("option");

	expect(rating.length).toBe(5);
	userEvent.selectOptions(
		screen.getByRole("combobox"),
		screen.getByRole("option", { name: "3" })
	);

	const option2: HTMLOptionElement = screen.getByRole("option", { name: "2" });
	const option3: HTMLOptionElement = screen.getByRole("option", {
		name: "3",
	});

	expect(option2.selected).toBe(false);
	expect(option3.selected).toBe(true);
});
