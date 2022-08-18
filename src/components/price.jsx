import React from "react";

// images
import tecthcrunch from '../assets/techcrunch.png'
import tnw from '../assets/tnw.png'
import bizinsider from '../assets/bizinsider.png'
import mashable from '../assets/mashable.png'

const Price = () => (
  <>
    {/* <!-- Press --> */}

    <section id="press">
      <img src={tecthcrunch} alt="tc-logo" />
      <img src={tnw} alt="tnw-logo" />
      <img src={bizinsider} alt="biz-insider-logo" />
      <img src={mashable} alt="mashable-logo" />
    </section>

    {/* Pricing */}

    <section id="pricing">

      <h2>A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

      <div class="card-deck mb-3 text-center">

        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-bold">Chihuahua</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">Free</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>5 Matches Per Day</li>
              <li>10 Messages Per Day</li>
              <li>Unlimited App Usage</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-dark">Sign up</button>
          </div>
        </div>

        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-bold">Labrador</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$49 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Unlimited Matches</li>
              <li>Unlimited Messages</li>
              <li>Unlimited App Usage</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-dark">Sign Up</button>
          </div>
        </div>

        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-bold">Mastiff</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$99 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Pirority Listing</li>
              <li>Unlimited Matches</li>
              <li>Unlimited Messages</li>
              <li>Unlimited App Usage</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-dark">Sign Up</button>
          </div>
        </div>

      </div>

    </section>
  </>
);

export default Price;