import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import PostComments from ".." // Seu componente

describe("Teste para o componente PostComments", () => {
  test("Deve adicionar dois comentários corretamente", () => {
    render(<PostComments />)

    const commentTextarea = screen.getByRole("textbox")

    fireEvent.change(commentTextarea, { target: { value: "Primeiro comentário" } })
    fireEvent.click(screen.getByRole("button", { name: /comentar/i }))
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument()

    fireEvent.change(commentTextarea, { target: { value: "Segundo comentário" } })
    fireEvent.click(screen.getByRole("button", { name: /comentar/i }))
    expect(screen.getByText("Segundo comentário")).toBeInTheDocument()
  })
});
