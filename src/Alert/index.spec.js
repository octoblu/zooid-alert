import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Alert from './'
import DismissButton from '../DismissButton'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('Alert', () => {
  it('should render nothing when children dont exist', () => {
    const sut = shallow(<Alert />)
    expect(sut.find('div').length).to.equal(0)
  })

  describe('when given children as prop', () => {
    it('should render the children', () => {
      const sut = shallow(<Alert>FlexBox!</Alert>)
      expect(sut).to.contain('FlexBox!')
    })

    describe('when dismissible prop does not exist', () => {
      it('should not render a dismiss button', () => {
        const sut = shallow(<Alert>Alpha</Alert>)
        expect(sut).to.not.contain(<DismissButton />)
      })
    })

    describe('when dismissible prop is truthy', () => {
      it('should render <DismissButton />', () => {
        const sut = shallow(<Alert dismissible>Alpha</Alert>)
        expect(sut.containsMatchingElement(<DismissButton />)).to.equal(true)
      })
    })

    describe('when type prop does not exist', () => {
      it('should render an alert of type info by default', () => {
        const sut = shallow(<Alert>Alert</Alert>)
        expect(sut).to.have.className(styles.info)
      })
    })

    describe('when given a type prop of info', () => {
      it('should render an alert of type info', () => {
        const sut = shallow(<Alert type="info">Alert</Alert>)
        expect(sut).to.have.className(styles.info)
      })
    })

    describe('when given a type prop of warning', () => {
      it('should render an alert of type warning', () => {
        const sut = shallow(<Alert type="warning">Alert</Alert>)
        expect(sut).to.have.className(styles.warning)
      })
    })

    describe('when given a type prop of error', () => {
      it('should render an alert of type error', () => {
        const sut = shallow(<Alert type="error">Alert</Alert>)
        expect(sut).to.have.className(styles.error)
      })
    })

    describe('when given a type prop of success', () => {
      it('should render an alert of type success', () => {
        const sut = shallow(<Alert type="success">Alert</Alert>)
        expect(sut).to.have.className(styles.success)
      })
    })

    describe('when given a className property', () => {
      it('should render with the root & given class names', () => {
        const sut = mount(
          <Alert className="MyCustomAlert">
            I can choke on just about anything
          </Alert>
        )
        expect(sut).to.have.className('MyCustomAlert')
      })
    })
  })
})
