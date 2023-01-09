import { cleanup, render, screen } from '@testing-library/react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Modal } from './index'

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup()
})

describe('Modal component', () => {
  it('should render Modal component', () => {
    render(
      <Modal isShowing={true} hide={() => {}} title="modal">
        <div>test</div>
      </Modal>
    )

    const modalComponent = screen.getByTestId('modal')

    expect(modalComponent).toBeInTheDocument()
  })

  it('should return null if Modal component receives isShowing parameter as false', () => {
    const wrapper = shallow((
      <Modal isShowing={false} hide={() => {}} title="modal">
        <div>test</div>
      </Modal>
    ))
    
    expect(wrapper.type()).toEqual(null)
  })
})