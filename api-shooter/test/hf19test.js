const chai    = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

const should  = chai.should();
const expect  = chai.expect;
const path    = require('path');

const rootDir = path.resolve(process.cwd() + "/../golos-tests/");
const golos   = require('golos-js');
const golos_helper   = require('../src/golos_helper');



describe("924 Account Notes plugin", async () => {
    it("924 Account Notes plugin description", async () => { // TODO 
    });
}

describe("324 Add option to choose curation reward percent", async () => {
    it("324 Add option to choose curation reward percent description", async () => { // TODO 
    });
}

describe("898 Auciton window improvements", async () => {
    it("898 Auciton window improvements description", async () => { // TODO 
    });
}

describe("533 Reduce time limits for posting and voting", async () => {
    it("533 Reduce time limits for posting and voting description", async () => { // TODO 
    });
}

describe("295 Referal program", async () => {
    it("295 Referal program description", async () => { // TODO 
    });
}

describe("825 post_count & comment_count Fix", async () => {
    it("825 post_count & comment_count Fix description", async () => { // TODO 
    });
}

describe("756 Set percent for delegeted Golos Power", async () => {
    it("756 Set percent for delegeted Golos Power description", async () => { // TODO 
    });
}


const checkPrice = (asset) => {
  asset.should.be.an('object');
  asset.should.have.property('base');
  asset.should.have.property('quote');
}

const checkWitness = async (witness) => {
  witness.should.have.property('id');
  witness.id.should.be.a('number');

  witness.should.have.property('owner');
  witness.owner.should.be.a('string');

  witness.should.have.property('created');
  witness.created.should.be.a('string');

  witness.should.have.property('url');
  witness.url.should.be.a('string');

  witness.should.have.property('votes');
  witness.votes.should.satisfy((val) => {
    return typeof(val) === 'string' || val === 0;
  });

  witness.should.have.property('virtual_last_update');
  witness.virtual_last_update.should.be.a('string');

  witness.should.have.property('virtual_position');
  witness.virtual_position.should.be.a('string');

  witness.should.have.property('virtual_scheduled_time');
  witness.virtual_scheduled_time.should.be.a('string');

  witness.should.have.property('total_missed');
  witness.total_missed.should.be.a('number');

  witness.should.have.property('last_aslot');
  witness.last_aslot.should.be.a('number');

  witness.should.have.property('last_confirmed_block_num');
  witness.last_confirmed_block_num.should.be.a('number');

  witness.should.have.property('pow_worker');
  witness.pow_worker.should.be.a('number');

  witness.should.have.property('signing_key');
  witness.signing_key.should.be.a('string');

  witness.should.have.property('props');
  witness.props.should.be.an('object');

  witness.props.should.have.property('account_creation_fee');
  witness.props.should.have.property('maximum_block_size');
  witness.props.should.have.property('sbd_interest_rate');
  witness.props.should.have.property('create_account_min_golos_fee');
  witness.props.should.have.property('create_account_min_delegation');
  witness.props.should.have.property('create_account_delegation_time');
  witness.props.should.have.property('min_delegation');

  witness.props.account_creation_fee.should.be.a('string');
  witness.props.maximum_block_size.should.be.a('number');
  witness.props.sbd_interest_rate.should.be.a('number');
  witness.props.create_account_min_golos_fee.should.be.a('string');
  witness.props.create_account_min_delegation.should.be.a('string');
  witness.props.create_account_delegation_time.should.be.a('number');
  witness.props.min_delegation.should.be.a('string');

  witness.should.have.property('sbd_exchange_rate');
  checkPrice(witness.sbd_exchange_rate);

  witness.should.have.property('last_sbd_exchange_update');
  witness.last_sbd_exchange_update.should.be.a('string');

  witness.should.have.property('last_work');
  witness.last_work.should.be.a('string');

  witness.should.have.property('running_version');
  witness.running_version.should.be.a('string');

  witness.should.have.property('hardfork_version_vote');
  witness.hardfork_version_vote.should.be.a('string');

  witness.should.have.property('hardfork_time_vote');
  witness.hardfork_time_vote.should.be.a('string');
};

const checkArray = (arr, callback) => {
  arr.should.be.a('array');
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    callback(arr[i]);
  } 
};

const checkOperation = (o) => {
  o.should.be.a('object');

  o.should.have.property('trx_id');
  o.should.have.property('block');
  o.should.have.property('trx_in_block');
  o.should.have.property('op_in_trx');
  o.should.have.property('virtual_op');
  o.should.have.property('timestamp');
  o.should.have.property('op');


  o.trx_id.should.be.a('string');
  o.block.should.be.a('number');
  o.trx_in_block.should.be.a('number');
  o.op_in_trx.should.be.a('number');
  o.virtual_op.should.be.a('number');
  o.timestamp.should.be.a('string');
  o.op.should.be.a('array');
};

