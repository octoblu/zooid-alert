import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import DismissButton from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<DismissButton />', () => {
  it('should render a button', () => {
    const sut = shallow(<DismissButton />)
    expect(sut.find('button').length).to.equal(1)
    expect(sut).to.contain.text('×')
  })

  describe('when button is clicked', () => {
    it('should call onDismiss prop', () => {
      const onDismissSpy = sinon.spy()
      const sut = mount(<DismissButton onDismiss={onDismissSpy} />)
      sut.simulate('click')
      expect(onDismissSpy).to.have.been.called
    })
  })
})
